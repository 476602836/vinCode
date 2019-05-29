<template>
    <view>
        <web-view :webview-styles="webviewStyles" src="http://weiqing.zxiu58.top/app/index.php?i=3&c=entry&do=pay&m=ab_vin&fee=2"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
            }
        }
    }
</script>

<style>

</style>