import React, { PureComponent } from "react";

import peopleImg from "../images/people.jpg";
import filmsImg from "../images/films.jpg";
import aliensImg from "../images/aliens.jpg";
import planetsImg from "../images/planets.png";
import starshipsImg from "../images/starships.jpeg";
import vehiclesImg from "../images/vehicles.jpg";

import { Table } from "reactstrap";

class List extends PureComponent {
  constructor(props) {
    super();
  }

  render() {
    let objArr = this.props[this.props.category];
    //^^^the array of films/people/etc.

    let upperfirst = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    let pageTitle = upperfirst(this.props.category);

    let imgSrc = "";

    switch (pageTitle) {
      case "People":
        imgSrc = peopleImg;
        break;
      case "Films":
        imgSrc = filmsImg;
        break;
      case "Species":
        imgSrc = aliensImg;
        break;
      case "Planets":
        imgSrc = planetsImg;
        break;
      case "Starships":
        imgSrc = starshipsImg;
        break;
      case "Vehicles":
        imgSrc = vehiclesImg;
        break;
      default:
        break;
    }

    return (
      <div>
        {objArr.length > 0 ? (
          <div>
            <div className="row justify-content-center">
              <h1 className="title-panel"> {pageTitle}</h1>
            </div>
            <div className="row justify-content-center">
              <img src={imgSrc} alt="category" />
            </div>
            <div className="row justify-content-center">
              <Table className="data-table">
                <tbody>
                  {Object.keys(objArr[0]).includes("title")
                    ? this.props[this.props.category].map(item => {
                        return (
                          <tr key={item.title} id="row">
                            <td>{item["title"]}</td>
                          </tr>
                        );
                      })
                    : this.props[this.props.category].map(item => {
                        return (
                          <tr key={item.name} id="row">
                            <td>{item["name"]}</td>
                          </tr>
                        );
                      })}
                </tbody>
              </Table>
            </div>
            <div className="row justify-content-center">
              {this.props.page === 1 ? null : (
                <input
                  type="button"
                  className="btn btn-primary btn-lg"
                  placeholder="back"
                  onClick={this.props.changePage}
                  value={this.props.page - 1}
                />
              )}
              <input
                type="button"
                className="btn btn-primary btn-lg"
                placeholder="next"
                onClick={this.props.changePage}
                value={this.props.page + 1}
              />
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default List;
