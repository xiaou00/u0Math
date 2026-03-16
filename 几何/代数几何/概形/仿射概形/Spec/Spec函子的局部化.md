#代数几何 

本节中将更直观地讲述 $\Spec$ 意义下[[局部化]]的含义.

>[!thm] 定理1
>$R_\mathfrak p$ 的素理想恰好是 $A$ 的包含于 $\mathfrak p$ 的素理想.

>[!pf]
>设 $\mathfrak q$ 是 $R_\mathfrak p$ 的一个素理想, 则 $\mathfrak q\cap R$ 是 $R$ 的一个素理想, 且 $\mathfrak q\cap R\subset\mathfrak p$, 这是因为 $R\setminus\mathfrak p$ 中的元素在 $R_\mathfrak p$ 中都是可逆元. 反过来设 $\mathfrak q$ 是 $R$ 的一个包含于 $\mathfrak p$ 的素理想, 则 $\mathfrak qR_\mathfrak p$ 是 $R_\mathfrak p$ 的一个素理想, 且 $\mathfrak qR_\mathfrak p\cap R=\mathfrak q$, 证毕.

通常情况下, $\Spec (R_\mathfrak{p})$ 可以理解为丢弃了所有不经过 $\mathfrak p$ 的信息, 只保留该点附近的几何结构.
