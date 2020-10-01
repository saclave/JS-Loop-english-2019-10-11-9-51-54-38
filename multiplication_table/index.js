<script>
var result = '';
var product = 0;
for (x=1; x<=9; x++) 
{
	for (y=1; y<=x; y++){
        result = result + x + '*' + y + '=' + (x*y) + ' ';
    }
    document.write(result + "<br>");
    result = '';
}
</script>