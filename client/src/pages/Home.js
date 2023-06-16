function Home() {
  return (
    <>
      <form>
        <fieldset class="fieldset">
          <legend>Choose Your Course Priority</legend>
          <div class="form-control">
            <label>Your Name</label>
            <input type="text" name="name" aria-describedby="description-1" />
          </div>
          <div class="form-control">
            <label>Your MNumber</label>
            <input
              type="text"
              name="mnumber"
              aria-describedby="description-1"
            />
          </div>
          <div class="form-control">
            <label>Your MSU Email</label>
            <input type="email" name="mail" aria-describedby="description-1" />
          </div>
          <div class="form-control">
            <label>
              How many credit hours will you be completing by the end of Spring
              2023 (Do not count CSC 232, MTH 314). Only 6 hours out of CSC 611,
              CSC 612. CSC 660 will count towards the credit hours for student's
              with deficiencies
            </label>
            <input type="text" name="mail" aria-describedby="description-1" />
          </div>
          <div class="form-control">
            <label>Are you Graduating in Fall 2023 (December 2023)</label>
            <ul class="unstyled horizontal">
              <li>
                <input
                  type="radio"
                  id="graduate-yes"
                  name="graduate_btn_group"
                  value="yes"
                  class="radio"
                  aria-describedby="description-10"
                />
                <label>Yes</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="graduate-no"
                  name="graduate_btn_group"
                  value="no"
                  class="radio Page2"
                  aria-describedby="description-10"
                />
                <label>No</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="graduate-maybe"
                  name="graduate_btn_group"
                  value="maybe"
                  class="radio"
                  aria-describedby="description-10"
                />
                <label>Maybe</label>
              </li>
            </ul>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default Home;
