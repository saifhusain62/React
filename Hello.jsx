function Hello(){
    
    let Myname = 'Saif Husain';

    let Fullname = () => {
        return 'Saimum Husain Saif';
    }

    let Number = 41220300379;
    
    return <p>

        My name is {Myname}. My Full name is {Fullname()}.My Id is {Number}.
    </p>
}

export default Hello;