function display(val) {
            if (val == 'C') {
                document.getElementById("text").value = '';
            }
            else if (val == 'del') {
                let valu = document.getElementById("text").value;
                let val = '';
                for (let i = 0; i < valu.length - 1; i++) {
                    val += valu[i];
                }
                document.getElementById("text").value = val;
            }
            else {
                document.getElementById("text").value += val;
            }
        }
        function solve() {
            let input = document.getElementById("text").value;
            let result = eval(input);
            document.getElementById('text').value = result;
        }
