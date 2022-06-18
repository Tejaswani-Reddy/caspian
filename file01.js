$('#multiselecta').multiselect({
    columns: 1,
    placeholder: 'select...',
    search: true
});


function getGroupA() {
    var grp_a = document.getElementById('multi-select-a').value;
    console.log(grp_a);

    var grp_b = document.getElementById('multi-select-b').value;
    console.log(grp_b);

    var gro_c = ["sub_A1", "sub_A2", "sub_B1", "sub_B2", "sub_C1", "sub_C2"];
    if (grp_a == 'A') {
        if (grp_b == 'A1') {
            document.getElementById('matter').innerHTML = grp_a + ', ' + grp_b + ', '
        }
        console.log('print');
    }
    var sarada = grp_a + grp_b;
    document.getElementById('matter').innerHTML = sarada;

}

getGroupA();