import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

export default function BooksList() {
    return (
        <>
            <div>BooksList</div>
            <nav>
                <ul>
                    <li><Link to='/books/1'>Book 1</Link></li>
                    <li><Link to='/books/2'>Book 2</Link></li>
                    <li><Link to='/books/3'>Book 3</Link></li>
                    <li><Link to='/books/new'>New Book</Link></li>
                </ul>
            </nav>
        </>
    )
}
