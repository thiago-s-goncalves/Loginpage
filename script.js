let java = document.getElementById("java");

d = new Date();
hour = d.getHours();
if(hour < 5)
	{
	  java.innerHTML = ("Boa noite, faça seu login");
	}
	else
	if(hour < 8)
	{
	   java.innerHTML = ("Bom dia, faça seu login");
	}
	else
	if(hour < 12)
	{
        java.innerHTML = ("Bom dia, faça seu login");
	}
	else
	if(hour < 18)
	{
        java.innerHTML = ("Boa tarde, faça seu login");
	}
	else
	{
        java.innerHTML = ("Boa noite, faça seu login");
	}


