import "../Css/Button.css"

function Button(){
    return(
        <>
        <div className="buttons">
                <button
                  type="button"
                  className="button btn-lg px-4 me-md-2"
                >
                  <a href="./Hire-me/hire-me.html"></a> Hire me{" "}
                </button>
                <button
                  type="button"
                  className="button btn-lg px-4"
                >
                  {" "}
                  <a href="./resume/resume.html"></a> Resume{" "}
                </button>
              </div>
        </>
    )
}
export default Button
