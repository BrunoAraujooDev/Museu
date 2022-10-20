import { useContext, useEffect, useState } from "react"
import { TemaContext } from "../../Contexts/TemaContext";
import { getAllDepartment } from "../../utils/handleHttpRequest"
import "./index.css";

export const Department = () => {

    const [departments, setDepartments] = useState([]);
    const {tema} = useContext(TemaContext);
    console.log('departments', departments)

    useEffect(() => {
        if(departments.length === 0){
            getAllDepartment().then(item => setDepartments(item.data.departments))
        }
    }, [])

    return (
        <article id="dept-article-container" style={ { backgroundColor: tema.corTema} }>
            <section>
                <input type="text" placeholder="Search a department" />


                {/* <select name="departamento" id="">
                    <option value="">Select a departments</option>
                    <option value="Contemporânea">Contemporânea</option>
                    <option value="Moderna">Moderna</option>
                    <option value="Barroco">Barroco</option>
                    <option value="Gótica">Gótica</option>
                </select> */}
            </section>
            <section id="dept-section-containerDepartment">
                { departments.length > 0 &&
                    departments.map(department => 
                        <div key={department.departmentId}  className="dept-div-item">
                            <h2 className="dept-h2-titulo">{department.displayName}</h2>
                            <div className="dept-empty-fundo"></div>
                            <figure className="dept-figure-departamento">
                                <img src="https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/american-wing/the-american-wing_marquee.jpg?as=1&mh=940&mw=2320&sc_lang=en&hash=2691E8237C24DF204687B062FCC26CFC"
                                    alt={department.displayName} className="dept-img-imagem" />
                            </figure>
                        </div>                
                        )
                }

            </section>
        </article>
    )
}