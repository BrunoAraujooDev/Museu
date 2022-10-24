import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { TemaContext } from "../../Contexts/TemaContext";
import { DepartmentImages } from "../../utils/departmentImages";
import { getAllDepartment } from "../../utils/handleHttpRequest"
import "./index.css";

export const Department = () => {

    const { tema } = useContext(TemaContext);

    const [departments, setDepartments] = useState([]);
    const [page, setPage] = useState({min: 0, max: 5});

    useEffect(() => {
        if (departments.length === 0) {
            getAllDepartment().then(item => setDepartments(item.data.departments))
        }
    }, [])

    return (
        <article id="dept-article-container" >
            <h1 >Department Areas</h1>
            <section className="dept-input-section">
                <input type="text" placeholder="Search a department" className="dept-input-search" style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }} />
            </section>
            <section id="dept-section-containerDepartment">
                {departments.length > 0 &&
                    departments.map((department, index) => {
                        if (index >= page.min && index < page.max ) {
                            return (
                                <div key={department.departmentId} className="dept-div-item">
                                    <Link to={`/department/${department.departmentId}`}>
                                        <figure className="dept-figure-departamento">
                                            <img src={DepartmentImages[department.displayName]}
                                                alt={department.displayName} className="dept-img-imagem" />
                                            <figcaption className="dept-figcaption-titulo" style={{ color: tema.corTexto }}>{department.displayName}</figcaption>
                                        </figure>
                                    </Link>
                                </div>
                            )
                        }}
                    )
                }

            </section>
            <nav aria-label="Page navigation" >
                <ul className="pagination justify-content-center" > 
                    <li className="page-item">
                        <button className="page-link" onClick={() => setPage({min: 0, max: 5})} style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }}>
                            1
                        </button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={() => setPage({min: 5, max: 10})} style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }}>
                            2
                        </button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={() => setPage({min: 10, max: 15})} style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }}>
                            3
                        </button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={() => setPage({min: 15, max: 20})} style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }}>
                            4
                        </button>
                    </li>
                </ul>
            </nav>
        </article>
    )
}