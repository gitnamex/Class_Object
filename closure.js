function add(num1, num2) {
    function myadd() {
        const c = num1 + num2
        return c
    }
    return myadd;

}
function main() {
    const respond = add(10, 20)
    console.log(respond)
}

main()