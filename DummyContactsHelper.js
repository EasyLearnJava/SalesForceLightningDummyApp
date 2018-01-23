({
    findAllContactsHelper : function(component) {
        var action = component.get("c.findAllContacts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
            } else if (state === "ERROR"){
                var message = response.getError();
                console.error("findAllContactsHelper : Error");
                console.error(message);                
            }else{
                console.log("findAllContactsHelper : Unhandled return response Status")
            }
        });
        $A.enqueueAction(action);
    }    
})
