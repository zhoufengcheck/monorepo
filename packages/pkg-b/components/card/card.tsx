import {defineComponent} from 'vue';
import './style/index.less'
export default defineComponent({
	name: 'Card',
	setup(){
		return ()=>{
			return (
				<div class="ea-card"></div>
			)
		}
	}
})