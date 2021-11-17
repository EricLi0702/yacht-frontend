<template>
  <v-card
    :loading="isGetting"
    class="mx-auto"
    max-width="100%"
    tile
  >
    <template slot="progress">
      <v-progress-linear
        color="#50645A"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-text>
      <v-data-table
          :headers="headers"
          :items="yachtList"
          :loading="isGetting"
          loading-text="Loading..."
          sort-by="ID"
          class="elevation-0"
        >
          <template v-slot:top>
            <v-toolbar flat >
              <v-toolbar-title><strong>My Yachts</strong></v-toolbar-title>
              <v-divider class="mx-4" inset vertical ></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" persistent max-width="500px" eager >
                <template v-slot:activator="{ on, attrs }" class="align-center">
                  <v-btn color="#50645A" text v-bind="attrs" v-on="on" >
                    <v-icon left color="#50645A" size="25">mdi-plus</v-icon>
                    Add Yacht
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row class=" align-center">
                        <v-col cols="12" class="d-flex justify-center hover-cursor-point align-center" @click="clickUploadImageBtn">
                          <v-progress-circular v-if="isUploadingAvatar" indeterminate color="#50645A" class="my-14"></v-progress-circular>
                          <v-avatar v-else-if="editedItem.userName !== '' && editedItem.avatar == '/'" color="#50645A" size="127" tile>
                            <span class="white--text headline">{{editedItem.userName[0]}}</span>
                          </v-avatar>
                          <img v-else-if="editedItem.userName == '' && editedItem.avatar == '/'" :src="`${baseUrl}/asset/img/icon/anonymous_avatar.png`" alt="UserAvatar" style="width:127px; height: 127px;">
                          <img v-else-if="editedItem.avatar !== '/'" :src="editedItem.avatar" alt="" style="width:127px; height: 127px;">
                        </v-col>
                        <input
                            ref="imageUploader"
                            class="d-none"
                            type="file"
                            accept="image/*"
                            @change="onImageFileChanged"
                          >
                      </v-row>
                      <v-row>
                        <v-col cols="12" >
                          <v-text-field color="#50645A" v-model="editedItem.userName" label="User Name *" ></v-text-field>
                        </v-col>
                        <v-col cols="12" >
                          <v-text-field color="#50645A" v-model="editedItem.email" label="Email *" ></v-text-field>
                        </v-col>
                        <v-col cols="12" >
                          <v-text-field color="#50645A" v-model="editedItem.phone" label="Phone"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#50645A" text @click="close" >
                      Close
                    </v-btn>
                    <v-btn color="#50645A" text :loading="isLoading" @click="save" >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog persistent v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline">Are you sure want to remove?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#50645A" text @click="closeDelete">Close</v-btn>
                    <v-btn color="#50645A" text @click="deleteItemConfirm" :loading="isDeleting">Ok</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.avatar`]="{ item }" class="pa-5">
            <v-avatar size="60" color="#50645A" class="rounded-lg"> 
              <v-img v-if="item.avatar !== '/'" :src="`${baseUrl}${item.avatar}`" alt="yacht" class="" />
              <span v-else style="color: #fff!important"> {{item.userName[0]}} </span>
            </v-avatar>
          </template>
          <template v-slot:[`item.phone`]="{ item }" class="pa-5">
            <v-icon v-if="item.phone == null" color="" size="25"> mdi-cancel </v-icon>
            <p v-else class="mb-0"> {{item.phone}} </p>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on" small class="mr-2" @click="editItem(item)" > mdi-pencil </v-icon>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" small @click="deleteItem(item)" > mdi-delete </v-icon>
              </template>
              <span>Delete</span>
            </v-tooltip>
          </template>
          <template v-slot:[`item.id`]="{ item }">
              {{yachtList.indexOf(item)+1}}
          </template>
          <template v-slot:no-data>
            <p>no Data</p>
          </template>
        </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import {getYachtList, deleteYacht, createYacht, updateYacht} from '../../api/yacht';
import {uploadImage} from '../../api/upload';

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: 'Settings' }
  },

  data: () => ({
    dialog: false,
    dialogDelete: false,
    isLoading: false,
    isGetting: false,
    isDeleting: false,
    isUploadingAvatar: false,
    isImageSelecting: false,
    selectedImageFile: null,
    yachtList: [],
    baseUrl: window.Laravel.base_url,
    headers: [
      { text: 'ID', value: 'id', align: 'start', },
      { text: 'Name', value: 'userName', sortable: true },
      { text: 'Avatar', value: 'avatar', sortable: false },
      { text: 'Phone', value: 'phone', sortable: true },
      { text: 'Email', value: 'email', sortable: false },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      id: -1,
      userName:'',
      phone:'',
      email: '',
      avatar : '/',
    },
    defaultItem: {
      id: -1,
      userName:'',
      phone:'',
      email: '',
      avatar : '/',
    },
  }),

  computed: {
    ...mapGetters({
      user: "authData",
    }),

    formTitle () {
      return this.editedIndex === -1 ? 'Add Yacht' : 'Edit Yacht'
    },
    currentPath(){
        return this.$route
    },
    
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  async created(){
    this.isGetting = true;
    await getYachtList()
    .then((res) => {
      console.log(res);
      this.yachtList = res.data.d;
    }).catch((err) => {
      console.log(err)  
    });
    this.isGetting = false;
  },

  methods: {
    async update () {
      
    },

    clickUploadImageBtn() {
      this.isImageSelecting = true
      window.addEventListener('focus', () => {
          this.isImageSelecting = false
      }, { once: true })
      this.$refs.imageUploader.click()
    },

    async onImageFileChanged(e) {
      this.selectedImageFile = e.target.files[0];
      if(this.selectedImageFile !== undefined && this.selectedImageFile !== null) {
        this.isImageSelecting = true;
        let fileData = new FormData();
        fileData.append('file', this.selectedImageFile);
        this.isUploadingAvatar = true;
        await uploadImage(fileData)
        .then((res) => {
            let path = `/uploads/image/${res.data}`;
            this.editedItem.avatar = path
            this.isImageSelecting = false
            this.selectedImageFile = null
        }).catch((err) => {
            console.log(err);
            this.isImageSelecting = false
        }); 
        this.isUploadingAvatar = false;
      }

      //reset image file input
      this.$refs.imageUploader.value = ''
      
    },

    async editItem (item) {
      this.editedIndex = this.yachtList.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.yachtList.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      let payload = {
        id : this.editedItem.id
      }
      this.isDeleting = true;
      await deleteYacht(payload)
      .then((res) => {
        if(res.data.s == true){
          this.yachtList.splice(this.editedIndex, 1)
        }
        this.isDeleting = false;
      }).catch((err) => {
        console.log(err)
        this.isDeleting = false;
      });
      this.closeDelete()
    },


    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save () {
      //update yachtList
      if (this.editedIndex > -1) {

        if(this.editedItem.phone.trim() == ''){
          this.editedItem.phone = null;
        }
        this.isLoading = true;
        await updateYacht(this.editedItem)
        .then((res) => {
          this.isLoading = false;
          if(res.data.s == true){
            //update yachtList
            Object.assign(this.yachtList[this.editedIndex], this.editedItem)
          }
        }).catch((err) => {
          this.isLoading = false;
          console.log(err)            
        });
      } 
      //save yachtList
      else {
          this.isLoading = true;

          if(this.editedItem.phone.trim() == ''){
            this.editedItem.phone = null;
          }
          await createYacht(this.editedItem)
          .then((res) => {
              this.isLoading = false;
              this.editedItem.id = res.data.d;
              //push data to yachtList
              this.yachtList.push(this.editedItem);
          }).catch((err) => {
              console.log(err.response)
              if(err.response.status == 500 && err.response.data.message.includes('Duplicate')){
                this.$vToastify.error('same email exist')
              }
              this.isLoading = false;
          });
      }
      this.close()
    },

  }
}
</script>
