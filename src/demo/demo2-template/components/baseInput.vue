 <template>
    <label class="baseInput">
        {{ label }}
        <input
            v-bind="$attrs"
            v-bind:value="value">
    </label>
</template>

<script>
    var explain = "含keyup.enter事件";

    export default {
        data:function () {
            return {
                
            }
        },
        inheritAttrs: false, //禁用特性(title，placeholder等，class不是)继承，$attrs指定
        props: ['label', 'value']
    }

    export {explain};
</script>

<style lang="scss" scoped>

</style>