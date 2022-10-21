import { useContext, useEffect, useState } from "react"
import { TemaContext } from "../../Contexts/TemaContext";
import { DepartmentImages } from "../../utils/departmentImages";
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
        <article id="dept-article-container" >
            <h1 >Department Areas</h1>
            <section className="dept-input-section">
                <input type="text" placeholder="Search a department" className="dept-input-search" style={ { color: tema.corTexto, backgroundColor: tema.corFundoTema} }/>
            </section>
            <section id="dept-section-containerDepartment">
                { departments.length > 0 &&
                    departments.map(department => 
                        <div key={department.departmentId}  className="dept-div-item">
                            <figure className="dept-figure-departamento">
                                <img src={DepartmentImages[department.displayName]}
                                    alt={department.displayName} className="dept-img-imagem" />
                                <figcaption className="dept-figcaption-titulo" style={ { color: tema.corTexto} }>{department.displayName}</figcaption>
                            </figure>
                        </div>                
                        )
                }

            </section>
        </article>
    )
}