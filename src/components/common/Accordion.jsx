import React, { Component, Fragment } from 'react'
import { EditableText, EditableParagraph } from "react-easy-editables";
import AddIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";


export default class Accordion extends Component {
  state = { activeItem: 0 }

  onSave = (field, itemIndex) => content => {
    const newItemsArr = [...this.props.items]
    const newItem = { ...this.props.items[itemIndex], [field]: content }
    newItemsArr.splice(itemIndex, 1, newItem)

    this.props.onSave(newItemsArr)
  }

  addItem = () => {
    const newItemsArr = [...this.props.items];
    const newItem = { header: { text: "Placeholder" }, body: { text: "Placeholder"} }
    newItemsArr.push(newItem);

    this.props.onSave(newItemsArr)
  }

  deleteItem = index => () => {
    const newItemsArr = [...this.props.items];
    newItemsArr.splice(index, 1)

    this.props.onSave(newItemsArr)
  }


  render() {
    return(
      <div className="accordion">
        {
          this.props.items.map((item, index) => {
            const active = this.state.activeItem === index;
            return(
              <Fragment key={`item-${index}`}>
                <div className={`accordion-item ${active ? "open" : ""}`}>
                  <div className="heading" onClick={() => this.setState({ activeItem: index })}>
                    <h4>
                      <EditableText content={item.header} onSave={this.onSave("header", index)} />
                    </h4>
                      <IconButton>
                      { active ? <MinusIcon /> : <AddIcon />}
                      </IconButton>
                  </div>
                  <div className="content">
                    <EditableParagraph content={item.body} onSave={this.onSave("body", index)} />
                  </div>
                </div>
                {
                  this.props.isEditing &&
                  <button className="p2pu-btn" onClick={this.deleteItem(index)}>Remove item</button>
                }
              </Fragment>
            )
          })
        }
        {
          this.props.isEditing &&
          <div>
            <button className="p2pu-btn blue" onClick={this.addItem}>Add item</button>
          </div>
        }
      </div>
    )
  }
}