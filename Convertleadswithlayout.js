getLead = zoho.crm.getRecordById("Leads",id);
CurrentDate = zoho.currentdate;
newDateTime = CurrentDate.addDay(30);
deal_values = Map();
deal_values.put("Deal_Name","Jake test New");
deal_values.put("Closing_Date",newDateTime);
    if ( getLead.get("Lead_Type") == "Project" ) 
    {
        layoutid = "6108564000000570003";
        display_value = "OP - Pipline";
        response = zoho.crm.convertLead(id,{"Deals":deal_values});
        dealID = response.get("Deals");
        mp = Map();
        mp.put("Layout",layoutid);
        mp.put("Pipeline",display_value);
        mp.put("Project_Location", "test");
        datalist = List();
        datalist.add(mp);
        param = Map();
        param.put("data",datalist);

        updateDeal = invokeurl
        [
        url :"https://www.zohoapis.com/crm/v6/Deals/"+ dealID
        type :PUT
        parameters: param.toString()
        connection:"merge"
        ];

        info "update deal : " + updateDeal;
    }
    else 
    {
        info "else";
        response = zoho.crm.convertLead(id,{"Deals":deal_values});
        info response;
    }


