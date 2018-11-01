//树叶飘落
window.onload=function(){
	var leafScene=function(el){
		this.viewport=el;
		this.world=document.createElement('div');
		this.leaves=[];
		this.options={
			numLeaves:20,
			wind:{
			magnitude:1.2,
			maxSpeed:12,
			duration:300,
			start:0,
			speed:0
		},
			
		};
		this.width=this.viewport.offsetWidth;
		this.height=this.viewport.offsetHeight;
		//animation helper
		this.timer=0;
		this._resetLeaf=function(leaf){
			
		}
	}
}



$(function (){
	//-----top头部导航 start
	//-----top头部导航end
	//-----电梯按钮 start----
	var eleColor=
})