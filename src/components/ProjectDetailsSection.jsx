export default function ProjectDetailsSection({project}) {
    return(
        <section>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>{project.date}</p>
        </section>
    );
}
