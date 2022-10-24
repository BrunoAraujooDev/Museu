import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { TemaContext } from "../../Contexts/TemaContext";
import { DepartmentImages } from "../../utils/departmentImages";
import { getAllDepartment } from "../../utils/handleHttpRequest"
import "./index.css";

export const Department = () => {

    const { tema } = useContext(TemaContext);

    const [departments, setDepartments] = useState([]);
    const [auxDepartments, setAuxDepartments] = useState([]);
    const [page, setPage] = useState({ min: 0, max: 5 });
    const [showPaginator, setShowPaginator] = useState(true);

    function handleSearch(e) {

        const search = e.target.value;

        let words = search.split(" ");


        let listFilter = departments.filter(obj => {
            
            let validWord = words.some(word => obj.displayName.toLowerCase().includes(word.toLowerCase()))
            
            return validWord;
        })
        

        if (listFilter.length > 0 && words[0].length > 2 ) {
            setAuxDepartments(listFilter)
            setShowPaginator(false)
            listFilter = []
        } else {
            setAuxDepartments(departments)
            setShowPaginator(true)
            listFilter = []
        }



    }

    useEffect(() => {
        if (departments.length === 0) {
            getAllDepartment().then(item => {
                setDepartments(item.data.departments)
                setAuxDepartments(item.data.departments)
            })
        }

    }, [])

    return (
        <article id="dept-article-container" >
            <h1 >Department Areas</h1>
            <section className="dept-input-section">
                <input type="text" placeholder="Search a department" className="dept-input-search" style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }} onChange={(e) => handleSearch(e)} />
            </section>
            <section id="dept-section-containerDepartment">
                {auxDepartments.length > 0 &&
                    auxDepartments.map((department, index) => {
                        if(showPaginator){
                            if (index >= page.min && index < page.max) {
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
                            }
                        } else {
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
                        }
                    }
                    )
                }

            </section>

            {showPaginator &&
                <nav aria-label="Page navigation" >
                    <ul className="pagination justify-content-center" >
                        <li className="page-item">
                            <button className="page-link" onClick={() => setPage({ min: 0, max: 5 })} style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }}>
                                1
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => setPage({ min: 5, max: 10 })} style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }}>
                                2
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => setPage({ min: 10, max: 15 })} style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }}>
                                3
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => setPage({ min: 15, max: 20 })} style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }}>
                                4
                            </button>
                        </li>
                    </ul>
                </nav>
            }
        </article>
    )
}