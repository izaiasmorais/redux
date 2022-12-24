import { useSelector } from "react-redux";
import { IState } from "../store";
import { ICartItem } from "../store/modules/cart/types";

export function Cart() {
	const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

	return (
		<table>
			<thead>
				<tr>
					<th>Produto</th>
					<th>Preço</th>
					<th>Quantidade</th>
					<th>Subtotal</th>
				</tr>
			</thead>
			<tbody>
				{cart.map((i) => (
					<tr key={i.product.id}>
						<td>{i.product.title}</td>
						<td>{i.product.price}</td>
						<td>{i.quantity}</td>
						<td>{(i.product.price * i.quantity).toFixed(2)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
