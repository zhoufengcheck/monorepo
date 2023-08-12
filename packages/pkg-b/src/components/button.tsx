import {defineComponent} from 'vue';
export default defineComponent({
    name: 'Button',
    setup(props){
        console.log(props)
        return ()=>{
            return (
                <span>
                    测试按钮
                </span>
            )
        }
    }
})