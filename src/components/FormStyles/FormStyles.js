import styled from "styled-components";

export const ContainerForm = styled.View`
	justify-content: center;
	background-color: #f8f8f8;
	border-radius: 15px;
	width: 358px;
`;
export const Fields = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 40px;
	gap: 10px;
`;

export const Input = styled.TextInput`
	display: block;
	box-sizing: border-box;
	max-width: 600px;
	width: 100%;
	padding: 20px 10px;
	border-radius: 10px;
	border: 1px solid #d3e2e5;
	background-color: #f5f8fa;
	text-align: left;
`;