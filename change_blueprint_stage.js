	crm_deal_id = 6108564000002622548;

	get_transition = invokeurl
	    [
			url: "https://www.zohoapis.com/crm/v2/Deals/"+crm_deal_id+"/actions/blueprint"
			type: GET
			connection:"crm"
		];
	// info get_transition.get("blueprint");
	transitions_id = get_transition.get("blueprint").get("transitions").getJSON("id");
	info transitions_id;

		/*------- move to next stage-------*/

    bpPutResParams = "{\"blueprint\": [{\"transition_id\": \"" + transitions_id + "\"}]}";
	bpPutRes = invokeurl
		[
			url :"https://www.zohoapis.com/crm/v2/" + "Deals" + "/" + crm_deal_id + "/actions/blueprint"
			type :PUT
			parameters:bpPutResParams
			connection:"crm"
		];
	info bpPutRes;