SELECT		S.Supermercado, 
			TI.TipoItem, 
			I.Item, 
			CONVERT(VARCHAR(10),GETDATE(),120)		AS DataColeta, 
			''										AS UnidadeMedida, 
			''                                      AS Quantidade,
			''										AS Preco, 
			''										AS Qualidade
FROM		Marmita.dbo.Item						AS I
INNER JOIN	Marmita.dbo.TipoItem					AS TI	ON	I.TipoItemID		= TI.TipoItemID
INNER JOIN	Marmita.dbo.Supermercado_TipoItem		AS STI	ON	TI.TipoItemID		= STI.TipoItemID
INNER JOIN	Marmita.dbo.Supermercado				AS S	ON	STI.SupermercadoID	= S.SupermercadoID
LEFT JOIN	Marmita.dbo.Preco						AS P	ON	I.ItemID			= P.ItemID
LEFT JOIN	Marmita.dbo.UnidadeMedida				AS UM	ON	P.UnidadeMedidaID	= UM.UnidadeMedidaID
LEFT JOIN	Marmita.dbo.Qualidade					AS Q	ON	P.QualidadeID		= Q.QualidadeID
WHERE		S.Supermercado	IN ('Bourbon', 'Industrial', 'Oliveira')
AND			TI.TipoItem		IN ('Açougue', 'Bebidas', 'Frios', 'Frutas', 'Leite e Ovos', 'Óleos', 'Padaria', 'Verduras e Legumas')
ORDER BY	TI.TipoItem,
			I.Item,
			S.Supermercado