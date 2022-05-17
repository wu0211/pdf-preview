<template>
  <div style="height: 95vh">
    <PDFPreview :datas="datas" :startPage="1" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  setup() {
    const datas = [
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/0.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/1.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/2.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/3.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/4.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/5.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/6.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/7.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/8.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/9.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/10.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/11.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/12.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/13.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/14.png",
      "https://wu-public.oss-cn-beijing.aliyuncs.com/pdf-preview/15.png",
    ];

    return {
      datas,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
