<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        公司列表
        <v-divider class="mx-4" vertical></v-divider>
        <v-dialog persistent max-width="600px" v-model="dialog">
          <template v-slot:activator="{ on }">
            <v-btn class="ma-2" color="error" dark>删 除</v-btn>
            <v-btn class="ma-2" color="primary" v-on="on" dark>添 加</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">公司信息</span>
            </v-card-title>
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="editedItem.cmpyCode" label="编码"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="editedItem.cmpyName" label="名称"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.cmpyFullName" label="全称"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-file-input
                      accept="image/png, image/jpeg, image/bmp"
                      prepend-icon="mdi-camera"
                      label="Logo"
                      v-model="editedItem.cmpyLogo"
                      :show-size="1000"
                    ></v-file-input>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model.number="editedItem.cmpySort" label="排序"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-textarea
                      clearable
                      clear-icon="mdi-format-clear"
                      auto-grow
                      counter
                      label="描述"
                      v-model="editedItem.cmpyDescription"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="请输入公司名称"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        show-select
        :items-per-page="pageCount"
        :headers="headers"
        :items="list"
        :search="search"
        :sort-by="['cmpySort']"
      >
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { CmpyService } from "@/network";
export default {
  data() {
    return {
      dialog: false,
      pageCount: 10,
      items: [
        {
          text: "首页",
          disabled: false,
          link: true,
          to: "/home/dashboard"
        },
        {
          text: "公司管理",
          disabled: false,
          link: true,
          to: "/home/cmpy"
        }
      ],
      defaultItem: {
        id: "",
        cmpyCode: "",
        cmpyName: "",
        cmpyFullName: "",
        cmpyDescription: "",
        cmpyLogo: null,
        cmpySort: 0
      },
      editedItem: {
        id: "",
        cmpyCode: "",
        cmpyName: "",
        cmpyFullName: "",
        cmpyDescription: "",
        cmpyLogo: null,
        cmpySort: 0
      },
      search: "",
      headers: [
        {
          text: "公司编码",
          sortable: true,
          value: "cmpyCode"
        },
        { text: "公司名称", value: "cmpyName", sortable: true },
        { text: "公司全称", value: "cmpyFullName", sortable: true },
        { text: "LOGO", value: "cmpyLogo", sortable: true },
        { text: "排序", value: "cmpySort", sortable: true },
        { text: "操作", value: "action", sortable: false }
      ],
      list: []
    };
  },
  created() {
    CmpyService.getCmpyList({ pageCount: this.pageCount, pageNo: 1 })
      .then(result => {
        this.list = result.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    this.$store.dispatch({ type: "changeItems", items: this.items });
    this.$store.dispatch({
      type: "changeTab",
      tab: {
        name: "公司管理",
        code: "cmpy",
        to: "/home/cmpy"
      }
    });
  },
  methods: {
    close() {
      this.dialog = false;
      this.editedItem = Object.assign({}, this.defaultItem);
    },
    save() {
      if (this.editedItem.id) {
        CmpyService.update(this.editedItem).then(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.dialog = false;
        });
      } else {
        CmpyService.add(this.editedItem).then(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.dialog = false;
        });
      }
    },
    editItem(item) {
      this.editedItem = Object.assign({}, item, { cmpyLogo: null });
      this.dialog = true;
    },
    deleteItem(item) {
      console.log(item);
      CmpyService.delete(item.id);
    }
  },
  components: {}
};
</script>

<style>
</style>
