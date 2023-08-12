import {defineComponent} from 'vue';
import './style/index.less'
export default defineComponent({
	name: 'Button',
	setup(){
		return ()=>{
			return (
				<span class="ea-button">测试按钮123</span>
			)
		}
	}
})