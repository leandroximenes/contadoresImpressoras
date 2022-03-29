<style>
    body {
        background-color: white;
    }
</style>
<script src="assets/jquery.js"></script>
<?php
try {
    $ip = $_GET['ip'];
    echo file_get_contents('http://' . $ip . '/web/guest/br/websys/status/getUnificationCounter.cgi');
} catch (\Exception $ex) {
    echo $ex->getMessage();
}

?>
<script>
    $('.commandLabel').remove()
    $('.defaultTableButton').remove()
</script>