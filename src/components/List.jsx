import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListItem from "./ListItem";

/**
 * Выводит список сообщений.
 */
const List = ({ massagesList }) => {
  return (
    <section className="section-list">
      <TransitionGroup component="ul" className="list">
        {massagesList &&
          massagesList.map((item) => (
            <CSSTransition key={item.id} timeout={500} classNames="list__item">
              <ListItem item={item} />
            </CSSTransition>
          ))}
      </TransitionGroup>

      <CSSTransition
        in={!massagesList || !massagesList.length}
        timeout={300}
        classNames="list__empty"
        unmountOnExit
      >
        <p className="list__empty">Empty</p>
      </CSSTransition>
    </section>
  );
};

export default List;
