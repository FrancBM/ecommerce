import React, { useContext } from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    //context
    const { cartIndicator } = useContext(CartContext);

    return (
        <span className="">
            <Badge
                badgeContent={cartIndicator}
                color="secondary">
                <ShoppingCartIcon
                    style={{ color: "#C84B31" }}
                />
            </Badge>
        </span>
    );
};

export default CartWidget;