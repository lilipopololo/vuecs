import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/Hello'
import AnnualOperatingConditions from '../components/ReportForm/AnnualOperatingConditions'
import{
  Row,
  Col,
  Input,
  InputNumber,
  Button,
  Pagination,
  DatePicker,
  Dialog,
  Form,
  FormItem,
  Table,
  TableColumn,
  Tooltip,
  Menu,
  MenuItem,
  Submenu,
  Upload,
  Checkbox,
  CheckboxGroup,
  Select,
  Option
} from 'element-ui'
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Input.name, Input)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Button.name, Button)
Vue.component(Pagination.name, Pagination)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Dialog.name, Dialog)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)
Vue.component(Upload.name, Upload)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children:[
        {
          path:'/AnnualOperatingConditions',
          name:'AnnualOperatingConditions',
          component:AnnualOperatingConditions
        }
      ]
    },
    // {
    // 	path:'/myapp',
    // 	name:'Myapp',
    // 	component:Myapp,
    //   children:[
    //     {
    //       path:'/myapp/prosto',  //嵌套
    //       component:UserMrofile
    //     }
    //   ]
    // },
    // {
    //   path:'/Inadd',
    //   component:Inadd
    // }
  ]
})
