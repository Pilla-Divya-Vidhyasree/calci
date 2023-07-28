function display(val) {
            if (val == 'C') {
                document.getElementById("input_holder").value = '';
            }
            else if (val == 'del') {
                let valu = document.getElementById("input_holder").value;
                let val = '';
                for (let i = 0; i < valu.length - 1; i++) {
                    val += valu[i];
                }
                document.getElementById("input_holder").value = val;
            }
            else {
                document.getElementById("input_holder").value += val;
            }
        }
        function solve() {
            let input = document.getElementById("input_holder").value;
            let result = eval(input);
            document.getElementById('input_holder').value = result;
        }
