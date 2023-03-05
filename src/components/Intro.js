


const Intro = ()=>{

    const projects = [{id:"1",name:"SPR Residence", url:"https://google.com"},
    {id:"2",name:"Boutique Residence", url:"https://google.com"},
    {id:"3",name:"DEK Residence", url:"https://google.com"},
    {id:"4",name:"Hojiwala Office", url:"https://google.com"},
    {id:"5",name:"Khatri's", url:"https://google.com"},
    {id:"6",name:"Sanskrit Library", url:"https://google.com"}]

    return(
        <div className="intro container">
            <p className="intro para-one">
                <span className="para-one highlight">Our work is in the dreams.</span> Cofounded by architects @aeshhhaaa and @rikensha6, #officearsa is a practice that strongly believes in designing contextually relevant spaces.
            </p>
            <div className="featured-projects container">
                <ul className="">
                    {projects.map((project,id)=>{
                        return <li className={project.id}><a href="https://google.com">{project.name}</a></li>
                    })}
                </ul>

            </div>
        </div>
    )




}


export default Intro;