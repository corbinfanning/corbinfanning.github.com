$(function () {
	$("#btn-coa").click(function () { 
        $(this).addClass("primary")
        $("#btn-tamu").removeClass("primary")
        $("#btn-both").removeClass("primary");
        $("div.search-engine").html(
          '<input type="hidden" name="site" value="arch_collection">' +
					'<input type="hidden" name="client" value="TAMU_frontend">' +
					'<input type="hidden" name="proxystylesheet" value="TAMU_frontend">' +
					'<input type="hidden" name="output" value="xml_no_dtd"><br>'
        );;
  });
	$("#btn-tamu").click(function () { 
        $(this).addClass("primary")
        $("#btn-coa").removeClass("primary")
        $("#btn-both").removeClass("primary")
        $("div.search-engine").html(
          '<input type="hidden" name="site" value="default_collection' +
					'<input type="hidden" name="client" value="TAMU_frontend">' +
					'<input type="hidden" name="proxystylesheet" value="TAMU_frontend">' +
					'<input type="hidden" name="output" value="xml_no_dtd"><br>'
        );;
  });
  $("#btn-both").click(function () { 
        $(this).addClass("primary")
        $("#btn-coa").removeClass("primary")
        $("#btn-tamu").removeClass("primary");
        $("div.search-engine").html(
          '<input type="hidden" name="site" value="default_collection|arch_collection">' +
					'<input type="hidden" name="client" value="TAMU_frontend">' +
					'<input type="hidden" name="proxystylesheet" value="TAMU_frontend">' +
					'<input type="hidden" name="output" value="xml_no_dtd"><br>' 
        );;
  });
  
});
