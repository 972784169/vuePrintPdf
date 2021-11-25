<template>
  <div>
    <el-button  @click="printJson">打印全部表格</el-button>
  </div>
</template>

<script>

import printJS from 'print-js'
export default {
  name: 'PrintPdf',
  components:{
    // Test
  },
  data () {
    return {
    uploadFile: "",
    list:[]
    }
  },
  methods:{
    async printJson() {
      //通过getdata调用后台接口获取数据封装到res
      // const res = await getdata();
      // this.list = res.data || [];
      let data = []
      for (let i=0; i < 100; i++) {
          data.push({
          name: `test1${i}`,
          sex: i%2==0?'男':'女',
          age:i*2,
          hobby:i%2==0?'篮球':'麻将',
          isMarried:i%2==0?'未婚':'已婚'
        })
      }
      printJS({
        printable: data,
        properties: [
          {
            field: 'name',
            displayName: '姓名',
            columnSize: 1
          },
           {
            field: 'sex',
            displayName: '性别',
            columnSize: 1
          },
          {
            field: 'age',
            displayName: '年龄',
            columnSize: 1
          },
          {
            field: 'hobby',
            displayName: '爱好',
            columnSize: 1
          },
          {
            field: 'isMarried',
            displayName: '婚姻状况',
            columnSize: 1
          }
        ],
        type: 'json',
        header: '标题',
        // 样式设置
        gridStyle: 'border: 2px solid #3971A5;',
        gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;'
      })
    },
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
