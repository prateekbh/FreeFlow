import { h, Component } from 'preact';

export default class Slide extends Component {
  render(props) {
    return (
      <div className="page" style="background-color: DARKORCHID">
        <div>
          <div className="mdc-typography--display2">Liquid route</div>
        </div>
        <div>
          <div className="mdc-typography--title">
            <div>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </div>
            <br />
            <br />
            <br />
            <div>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis....
            </div>
          </div>
        </div>
      </div>
    );
  }
}
