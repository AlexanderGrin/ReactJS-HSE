import React from "react";
import styles from './style/TrackersView.module.scss'
import classnames from "classnames/bind";

const cx = classnames.bind(styles);


class  TrackersView extends React.Component{

    render(){
        return (
            <div className={cx('TrackersView')}>
                <h1>Список трекеров</h1>
                <div className={cx('Buttons')}>
                    <button onClick={this.props.sortByName} className={cx('sortButton')}>Сортировка по имени</button>
                    <button onClick={this.props.sortByPriority} className={cx('sortButton')}>Сортировка по приоритету</button>
                </div>
                <div id={cx('TrackerList')}>
                    {console.log(this.props.trackers)}
                    {this.props.trackers.map((item) => (
                        <div className={cx('Item')}>
                            <div className={'view_name'}>Название: {item['name']}</div>
                            <div className={'view_description'} >Описание: {item['description']}</div>
                            <div className={'view_priority'}>Приоритет: {item['priority']}</div>
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default TrackersView;