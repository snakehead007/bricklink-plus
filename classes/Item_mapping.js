const {makeCall} = require( "../functions/callApi");
class Item_mapping {
    base_url = "https://api.bricklink.com/api/store/v1";
    getElementID(type,item_no,color_id=null){
        let uri = this.base_url+"/item_mapping/"+type+"/"+item_no+"?";
        if(color_id){
            uri+="color_id="+color_id
        }
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    getItemNumber(element_id){
        let uri = this.base_url+"/item_mapping/"+element_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
}
module.exports.Item_mapping = Item_mapping;
