                function displayDivSelecteur()
				{
					var resultTotal = "$ " + (0).formatMoney(2, ".", ",");
					document.getElementsByName('output6')[0].value= resultTotal;

					var divSelection = document.getElementById("dropDownSelection").value;
					document.getElementById("idMessage01").innerText= "";

					
					if (divSelection =="0")
					{
						document.getElementById("residential").style.display = 'none';
						document.getElementById("comercial").style.display = 'none';
						document.getElementById("corporate").style.display = 'none';
						document.getElementById("hybrid").style.display = 'none';
						document.getElementById("productline").style.display = 'none';
					}	
					else if (divSelection =="1")
					{
						document.getElementById("nbApartament").value = "";
						document.getElementById("nbFloors").value = "";
						document.getElementById("nbBasement").value = "";
						document.getElementsByName('output1')[0].value= "";						
						document.getElementById("residential").style.display = 'inline';
						document.getElementById("comercial").style.display = 'none';
						document.getElementById("corporate").style.display = 'none';
						document.getElementById("hybrid").style.display = 'none';
						document.getElementById("productline").style.display = 'inline';
					}
					else if (divSelection =="2")
					{
						document.getElementById("residential").style.display = 'none';
						document.getElementById("comercial").style.display = 'inline';
						document.getElementById("corporate").style.display = 'none';
						document.getElementById("hybrid").style.display = 'none';
						document.getElementById("productline").style.display = 'inline';
					}
					else if (divSelection =="3")
					{
						document.getElementById("residential").style.display = 'none';
						document.getElementById("comercial").style.display = 'none';
						document.getElementById("corporate").style.display = 'inline';
						document.getElementById("hybrid").style.display = 'none';
						document.getElementById("productline").style.display = 'inline';
					
					}
					else if (divSelection =="4")
					{
						document.getElementById("residential").style.display = 'none';
						document.getElementById("comercial").style.display = 'none';
						document.getElementById("corporate").style.display = 'none';
						document.getElementById("hybrid").style.display = 'inline';
						document.getElementById("productline").style.display = 'inline';
					
					}

				}

				function calculateTotal()
				{					
					document.getElementById("divResult").style.display = 'inline';
					var rdtSelection = document.getElementsByName('box2');
					var rangeElevator = 0;
					var resultPartial = 0;
					var resultTotal = 0;
					var unitCost = 0;	
					var unitCostInst = 0;	

					var divSelection = document.getElementById("dropDownSelection").value;
					
					if (divSelection =="0")
					{
						rangeElevator = 0;	
					}	
					else if (divSelection =="1")
					{
						rangeElevator = document.getElementsByName('output1')[0].value;	
					}
					else if (divSelection =="2")
					{
						rangeElevator = document.getElementsByName('output2')[0].value;	
					}
					else if (divSelection =="3")
					{
						rangeElevator = document.getElementsByName('output3')[0].value;	
					}

					else if (divSelection =="4")
					{
						rangeElevator = document.getElementsByName('output4')[0].value;	
					}


						
					if (rdtSelection[0].checked)
					{
						unitCost = 7565;
						unitCostInst = 0.10;												
					}	
					else if (rdtSelection[1].checked)
					{
						unitCost = 12345;
						unitCostInst = 0.13;																
					}	
					else if (rdtSelection[2].checked)
					{
						unitCost = 15400;
						unitCostInst = 0.16;																			
					}
					resultPartial = unitCost * rangeElevator;
					resultTotal = resultPartial + (resultPartial*unitCostInst);
					resultTotal = "$ " + (resultTotal).formatMoney(2, ".", ",");

					document.getElementsByName('output7')[0].value= resultTotal;
				
				}

				function isNumberKey(evt)
				{
					var charCode = (evt.which) ? evt.which : event.keyCode
					if (charCode > 31 && (charCode < 48 || charCode > 57))
						return false;

					return true;
				}

			

				function calculateQuoteResidential()
				{					
					var colResid = 0;
					var resultQuote = 0;
					var rdtSelection = document.getElementsByName('box2');
					var nbApart = document.getElementById("nbApartament").value;
					var nbFlo = document.getElementById("nbFloors").value;
					var nbBase = document.getElementById("nbBasement").value;
					document.getElementById("idMessage01").innerText= ""; 							
					
					if (nbApart == "" || nbFlo == "" || nbBase == "")
					{ 
						document.getElementById("idMessage01").innerText= "Please you need to answer the question for calculation!"; 							
					}  
					else
					{
						var avgDoorPerFloow = (Math.ceil(nbApart / (nbFlo - nbBase)));
						var estiResid = (Math.ceil(avgDoorPerFloow/6));									
						
						
						if (nbFlo > 20)
						{
							colResid = (Math.ceil(nbFlo/20));
							resultQuote = (Math.ceil(colResid * estiResid));
						}
						else
						{
							resultQuote = estiResid;
						}

						if (!isFinite(resultQuote))
						{
							document.getElementById("idMessage01").innerText= "Please check your values! Calculation Invalide"; 							
						}
						else
						{							
							document.getElementsByName('output1')[0].value= resultQuote;
						}						

						if (rdtSelection[0].checked || rdtSelection[1].checked || rdtSelection[2].checked) 
						{
							calculateTotal();
						}
					}
					
				}

					function calculateQuoteCommercial()
					{
						var rdtSelection = document.getElementsByName('box2');
						var nbCageDeployed = document.getElementById("noCage").value;
						document.getElementById("idMessage01").innerText= ""; 							
					
						if (nbCageDeployed == "")
						{ 
							document.getElementById("idMessage01").innerText= "Please you need to answer the question for calculation!"; 							
						}  
						else
						{
							var resultQuote = nbCageDeployed;

							if (!isFinite(resultQuote))
							{
								document.getElementById("idMessage01").innerText= "Please check your values! Calculation Invalide"; 							
							}
							else
							{	
								document.getElementsByName('output2')[0].value= resultQuote;
							}

							if (rdtSelection[0].checked || rdtSelection[1].checked || rdtSelection[2].checked) 
							{
								calculateTotal();
							}
						}
					}
					
					function calculateQuoteCorporate()
					{
						var rdtSelection = document.getElementsByName('box2');
						var nrFloorsCo = document.getElementById("nrFloorsContained").value;
						var nrBasement = document.getElementById("nrBasement").value;
						var nrOccupFloors = document.getElementById("nrOccupantsFloors").value;
						document.getElementById("idMessage01").innerText= ""; 							
					
						if (nrFloorsCo == "" || nrBasement == "" || nrOccupFloors == "")
						{ 
							document.getElementById("idMessage01").innerText= "Please you need to answer the question for calculation!"; 							
						}  
						else
						{
			
							var totalNrOccupants = (nrOccupFloors * nrFloorsCo);
							var nrElevReq = (Math.ceil(totalNrOccupants/1000));
							var nrElevColReq = (Math.ceil(nrFloorsCo/20));
							var nrElevPerCol = (Math.ceil(nrElevReq/nrElevColReq));
							
							var elevPerCol = (Math.ceil (nrElevReq/nrElevColReq));
							var resultQuote =(Math.ceil (elevPerCol * nrElevColReq));

							if (!isFinite(resultQuote))
							{
								document.getElementById("idMessage01").innerText= "Please check your values! Calculation Invalide"; 							
							}
							else
							{	
								document.getElementsByName('output3')[0].value= resultQuote;
							}

							if (rdtSelection[0].checked || rdtSelection[1].checked || rdtSelection[2].checked) 
							{
								calculateTotal();
							}
						} 		
					}


					function calculateQuoteHybrid()
					{
						var rdtSelection = document.getElementsByName('box2');
						var nrFloorsCo = document.getElementById("hFloorsContained").value;
						var nrBasement = document.getElementById("hBasement").value;
						var nrOccupFloors = document.getElementById("hOccupantsFloors").value;
						document.getElementById("idMessage01").innerText= ""; 							
					
						if (nrFloorsCo == "" || nrBasement == "" || nrOccupFloors == "")
						{ 
							document.getElementById("idMessage01").innerText= "Please you need to answer the question for calculation!"; 							
						}  
						else
						{
		
							var totalNrOccupants = (nrOccupFloors * nrFloorsCo);
							var nrElevReq = (Math.ceil(totalNrOccupants/1000));
							var nrElevColReq =(Math.ceil(nrFloorsCo/20))
							var nrElevPerCol =(Math.ceil(nrElevReq/nrElevColReq));

							var elevPerCol = (Math.ceil (nrElevReq/nrElevColReq));
							var resultQuote = (Math.ceil(nrElevPerCol * nrElevColReq));

							if (!isFinite(resultQuote))
							{
								document.getElementById("idMessage01").innerText= "Please check your values! Calculation Invalide"; 							
							}
							else
							{
								document.getElementsByName('output4')[0].value= resultQuote;
							}	
							if (rdtSelection[0].checked || rdtSelection[1].checked || rdtSelection[2].checked) 
							{
								calculateTotal();
							}
						}
								
					}


					function ShowHideDiv() 
					{
						document.getElementById("divResult").style.display = 'inline';
						var rdtSelection = document.getElementsByName('box2');
						var resultPrice = 0;
						var resultPerce = 0;
						
						if (rdtSelection[0].checked)
						{
							resultPrice = "$7565.00";
							resultPerce = "10%";
						}	
						else if (rdtSelection[1].checked)
						{
							resultPrice = "$12345.00";
							resultPerce = "13%";
						}	
						else if (rdtSelection[2].checked)
						{
							resultPrice = "$15400.00";
							resultPerce = "16%";
						}

						document.getElementsByName('output5')[0].value= resultPrice;
						document.getElementsByName('output6')[0].value= resultPerce;
						if (rdtSelection[0].checked || rdtSelection[1].checked || rdtSelection[2].checked) 
						{
							calculateTotal();
						}
					}


                   
					function displayData()
					{
						var data=['Product Line'];
						var output="";
						var output2="";
						var dataList;
						
						for(var i=0; i< data.length; i++)
						{
							dataList=data[i];
							//output+= '<input type="label" value='+dataList+' name="box2">'  + '   ' + dataList+'   '+'<br><br>';
							output+= '<label>'  + '   ' + dataList+'   '+'</label><br><br>';
							output2+= 'Standard:<input type="radio" value="1" name="box2" onclick="ShowHideDiv()">  '+'  Premium:<input type="radio" value="2" name="box2" onclick="ShowHideDiv()">  '+'  Excelium:<input type="radio" value="3" name="box2" onclick="ShowHideDiv()">'+'<br><br>';
							document.getElementById("dataList").innerHTML=output;
							document.getElementById("radioBtn").innerHTML=output2;
						}
					}