<template>
  <v-card :loading="isLoading" class="mx-auto" max-width="100%" tile>
    <template slot="progress">
      <v-progress-linear
        color="#50645A"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="
        user.bgImg == '/'
          ? `${basicUrl}/asset/img/profile/commonBg.jpg`
          : `${basicUrl}${user.bgImg}`
      "
      class="position-relative overflow-visible img-pb-0"
    >
      <v-btn
        @click="clickUploadImageBtn1"
        fab
        color="#50645a"
        dark
        class="position-absolute"
        style="top: 30px; left: 30px"
      >
        <v-icon>mdi-pencil</v-icon></v-btn
      >
      <input
        ref="imageUploader1"
        class="d-none"
        type="file"
        accept="image/*"
        @change="onImageFileChanged1"
      />
      <v-avatar
        class="position-absolute hover-cursor-point"
        style="
          bottom: -50px;
          right: 30px;
          border-width: 3px;
          border-color: white;
          border-radius: 50%;
        "
        color="#50645a"
        size="180"
        @click="clickUploadImageBtn"
      >
        <span
          v-if="user.name !== '' && user.avatar == '/'"
          class="white--text headline"
          >{{ user.name[0] }}</span
        >
        <v-img v-else :src="user.avatar"></v-img>
      </v-avatar>
      <input
        ref="imageUploader"
        class="d-none"
        type="file"
        accept="image/*"
        @change="onImageFileChanged"
      />
    </v-img>

    <v-card-title>{{ user.name }}</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        <v-icon size="25" color="#50645A">mdi-email-outline</v-icon> •
        {{ user.email }}
      </div>
      <div class="my-4 text-subtitle-1">
        <v-icon size="25" color="#50645A">mdi-phone-outline</v-icon> •
        {{
          user.phone == null ? "you have not set phone number yet" : user.phone
        }}
      </div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-spacer />
      <v-btn color="#50645A" text @click="openProfileDialog">
        {{ $t("common").edit }}
      </v-btn>
    </v-card-actions>

    <v-dialog v-model="profileDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  class="pt-0 mt-0"
                  color="#50645A"
                  v-model="newUserName"
                  :label="$t('profile').username + ' *'"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  class="pt-0 mt-0"
                  color="#50645A"
                  v-model="newEmail"
                  :label="$t('profile').email + ' *'"
                  hide-details
                ></v-text-field>
              </v-col>
              <!-- <v-col cols="12">
                <v-text-field
                  class="pt-0 mt-0"
                  color="#50645A"
                  v-model="newPhoneNumber"
                  :label="$t('profile').phone"
                  hide-details
                ></v-text-field>
              </v-col> -->
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#50645A" text @click="closeDialog">
            {{ $t("common").close }}
          </v-btn>
          <v-btn
            color="#50645A"
            text
            @click="updateProfile"
            :loading="isLoading"
          >
            {{ $t("common").save }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { uploadImage } from "../../api/upload";
import { basicUrl } from "../../config";

export default {
  scrollToTop: false,

  metaInfo() {
    return { title: "settings" };
  },

  data: () => ({
    isLoading: false,
    basicUrl: basicUrl,
    isImageSelecting: false,
    selectedImageFile: null,
    profileDialog: false,
    newUserName: "",
    newEmail: "",
    // newPhoneNumber: ''
  }),

  computed: mapGetters({
    user: "authData",
  }),

  created() {},

  methods: {
    async update() {
      const { data } = await this.form.patch("/api/settings/profile");

      this.$store.dispatch("updateUser", { user: data });
    },

    clickUploadImageBtn() {
      this.isImageSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isImageSelecting = false;
        },
        { once: true }
      );
      this.$refs.imageUploader.click();
    },

    async onImageFileChanged(e) {
      this.selectedImageFile = e.target.files[0];
      if (
        this.selectedImageFile !== undefined &&
        this.selectedImageFile !== null
      ) {
        this.isImageSelecting = true;
        let fileData = new FormData();
        fileData.append("file", this.selectedImageFile);
        this.isLoading = true;
        await uploadImage(fileData)
          .then((res) => {
            let path = `/uploads/image/${res.data}`;
            this.user.avatar = path;
            this.isImageSelecting = false;
            this.selectedImageFile = null;
            this.updateAvatar(path);
          })
          .catch((err) => {
            console.log(err);
            this.isImageSelecting = false;
          });
        this.isLoading = false;
      }

      //reset image file input
      this.$refs.imageUploader.value = "";
    },

    clickUploadImageBtn1() {
      this.isImageSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isImageSelecting = false;
        },
        { once: true }
      );
      this.$refs.imageUploader1.click();
    },

    async onImageFileChanged1(e) {
      this.selectedImageFile = e.target.files[0];
      if (
        this.selectedImageFile !== undefined &&
        this.selectedImageFile !== null
      ) {
        this.isImageSelecting = true;
        let fileData = new FormData();
        fileData.append("file", this.selectedImageFile);
        this.isLoading = true;
        await uploadImage(fileData)
          .then((res) => {
            let path = `/uploads/image/${res.data}`;
            this.user.bgImg = path;
            this.isImageSelecting = false;
            this.selectedImageFile = null;
            this.updateBG(path);
          })
          .catch((err) => {
            console.log(err);
            this.isImageSelecting = false;
          });
        this.isLoading = false;
      }

      //reset image file input
      this.$refs.imageUploader1.value = "";
    },

    async updateAvatar(path) {
      this.isLoading = true;
      let payload = {
        userId: this.user.id,
        avatar: path,
      };
      await this.$store.dispatch("updateUser", payload)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.isLoading = false;
    },

    async updateBG(path) {
      this.isLoading = true;
      let payload = {
        userId: this.user.id,
        bgImg: path,
      };
      await this.$store.dispatch("updateUser", payload)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.isLoading = false;
    },

    openProfileDialog() {
      this.profileDialog = true;
      this.newUserName = this.user.name;
      this.newEmail = this.user.email;
      // this.newPhoneNumber = this.user.phone == null ? '' : this.user.phone ;
    },

    closeDialog() {
      this.profileDialog = false;
      this.newUserName = "";
      this.newEmail = "";
      // this.newPhoneNumber = '';
    },

    async updateProfile() {
      if (this.newUserName.trim() == "") {
        return this.$vToastify.error("Please input Name");
      }
      if (this.newEmail.trim() == "") {
        return this.$vToastify.error("Please input Email");
      }
      // if(/^\d*$/.test(this.newPhoneNumber) == false){
      //   return this.$vToastify.error(i18n.t('alert').notCorrectPhone)
      // }
      this.isLoading = true;
      let payload = {
        userId: this.user.id,
        application: true,
        name: this.newUserName,
        userEmail: this.newEmail,
        // userPhone: this.newPhoneNumber == '' ? null : this.newPhoneNumber
      };
      await this.$store.dispatch("updateUser", payload)
        .then((res) => {
          console.log(res);
          if (res.data.s == true) {
            this.user.name = this.newUserName;
            this.user.email = this.newEmail;
            // this.user.phone = this.newPhoneNumber == ''? null: this.newPhoneNumber
            this.closeDialog();
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.isLoading = false;
    },
  },
};
</script>
