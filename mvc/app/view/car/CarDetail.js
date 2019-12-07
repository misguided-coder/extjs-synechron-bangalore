Ext.define("Automobile.view.car.CarDetail",{
	extend:"Ext.panel.Panel",
	alias:'widget.carDetail',
	title:'Car Details',
	bodyStyle:'paddingLeft:300px;paddingTop:20px',
	split: true,
	templateString : [
		"<div style='font-size:20px'>",
	    '<b>Name:</b> {model}<br/>',
	    '<b>Make:</b> {make}<br/>',
	    '<b>Color:</b> {color}<br/>',
	    '<b>Price:</b> {price}<br/>',
	    '<b>LaunchDate:</b> {launchDate}<br/>',
	    '</div>'
    ],

    initComponent: function() {
    	this.tpl =  Ext.create('Ext.XTemplate',this.templateString);
    	this.html = '<h2>Please select a car to see additional details!</h2>';
		this.callParent(arguments);
	},

	showData : function(data){
		console.log("Inside CarDetail.showData()");
		this.tpl.overwrite(this.body,data);
		//this.body.update(this.templateString);
	}
});