<template>
  <v-app>
    <div id="container" class="d-flex justify-center align-center">
      <div id="titleContainer">
        <div id="bigTitle">
          <div class="char">F</div>
          <div class="char">A</div>
          <div class="char">S</div>
          <div class="char">T</div>
          <div class="space"></div>
          <div class="char">B</div>
          <div class="char">P</div>
          <div class="char">M</div>
        </div>
        <div id="secTitle">Intelligent cloud platform</div>
        <div id="thrTitle">欢迎使用FAST BPM智能云平台</div>
      </div>
      <v-card
        :elevation="10"
        class="loginContainer d-flex flex-column justify-center align-center"
        height="300"
        width="450"
      >
        <img src="@/assets/img/logo-v.png" />
        <div id="tips" class="title text-center font-weight-bold">请 登 录</div>
        <v-form ref="form" v-model="valid" lazy-validation class="loginForm">
          <v-text-field
            label="用户名"
            hide-details="auto"
            :rules="nameRules"
            required
            v-model="loginName"
          ></v-text-field>
          <v-text-field
            label="密码"
            hide-details="auto"
            :rules="pwdRules"
            required
            v-model="password"
            @keyup.enter="login"
          ></v-text-field>
        </v-form>
        <v-btn
          :loading="isLoading"
          :disabled="isLoading"
          class="submit col-8"
          color="blue-grey"
          @click="login"
        >登 录</v-btn>
      </v-card>
      <Bubble></Bubble>
    </div>
    <v-snackbar v-model="snackbar" color="success" :timeout="6000" :top="true">
      登录成功！
      <v-btn dark text @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import Bubble from "@/components/animation/Bubble";

export default {
  data() {
    return {
      valid: true,
      loginName: "",
      nameRules: [
        v => !!v || "用户名不能为空",
        v => (v && v.length >= 5) || "长度需要大于4位"
      ],
      password: "",
      pwdRules: [
        v => !!v || "密码不能为空",
        v => (v && v.length >= 6) || "长度需要大于5位"
      ],
      isLoading: false,
      loginBtnTxt: "登录",
      snackbar: false
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;
        this.loginBtnTxt = "正在登录，请稍后！";
        this.snackbar = true;
        setTimeout(() => {
          this.isLoading = false;
          this.loginBtnTxt = "登录";
          this.$router.push("/home");
        }, 2000);
      }
    }
  },
  components: {
    Bubble
  }
};
</script>

<style lang="scss" scoped>
#container {
  position: absolute;
  height: 100%;
  width: 100%;
  background: none;
  #titleContainer {
    position: absolute;
    top: 40px;
    z-index: 2;
    #bigTitle {
      cursor: pointer;
      color: #ffffff;
      font-size: 60px;
      font-weight: bold;
      text-align: center;

      .char {
        margin: 0 2px;
        display: inline-block;
        transition-duration: 0.3s;
      }

      .char:hover {
        transform: scale(1.5);
      }
      .space {
        display: inline-block;
        margin: 0 10px;
      }
    }
    #secTitle {
      text-align: center;
      font-size: 30px;
      color: #ffffff;
    }
    #thrTitle {
      color: #ffffff;
      text-align: center;
      font-size: 20px;
    }
  }
  .loginContainer {
    width: 450px;
    height: 300px;
    position: absolute;
    top: 40%;
    background: none;
    z-index: 2;
    img {
      position: absolute;
      width: 80px;
      z-index: 2;
      top: -50px;
      border-radius: 50%;
      border: 5px solid white;
      transition-duration: 0.3s;
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.5);
    }

    #tips {
      position: absolute;
      top: 50px;
    }

    .loginForm {
      width: 70%;
    }

    .submit {
      position: absolute;
      bottom: 30px;
    }
  }
}
</style>
