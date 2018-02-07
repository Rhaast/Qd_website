<!-- 页面底部 -->
<template>
		<div class="footer">
			<div class="innavfter">
				<p>{{ message }}</p>
			</div>	
		</div>
</template>

</div>
<script type="text/javascript">	

	export default{
		
		data(){
			return{
				message:'Copyright© 2017 qiaodu.com all right reserved'
			}	
		}
	};
</script>
<style>
.footer{height: 100px;background: #f3f5f7;}
.footer .innavfter{margin: 0  auto;width: 1600px;}
.footer .innavfter p{font-size: 18px;color: #9b9a9a;height: 30px;line-height: 30px;padding-top: 35px;}
</style>