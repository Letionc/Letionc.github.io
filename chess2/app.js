function chessCreate(handlers, h = 15, w = 15, wincnt = 5, checker = [[0,1],[1,1],[1,0],[1,-1]]){
	const chess = new Chess(h, w, wincnt, checker);
	const chess_dom = chess.domCreate();
	var cnt = 0;
	handlers = handlers || {};
	handlers.isUp = handlers.isUp || (() => true);
	handlers.init = handlers.init || ((ret, v) => console.log("chess.init => "+String(ret)));
	handlers.down = handlers.down || ((ret, v) => console.log("chess.down => "+String(ret)));
	handlers.up = handlers.up || (ret => console.log("chess.up => "+String(ret)));
	const res = {
		chess: chess,
		dom: chess_dom,
		init: (h, w, wincnt, checker) => (cnt=0, chess.init(h, w, wincnt, checker), handlers.init({status: "ok", winner: null}, "w")),
		getWinner: chess.getWinner,
	};
	
	chess.domListen(chess_dom, "click", (_,e,y,x) => {
		var ret = null;
		if(handlers.isUp()){
			ret = chess.up(y, x);
			chess.domUpdateP(y, x, e);
			handlers.up(ret);
		}else{
			const opt = cnt & 1? "w": "b";
			ret = chess.down(y, x, opt);
			(ret.status == "ok") && ++cnt;
			chess.domUpdateP(y, x, e);
			handlers.down(ret, opt);
		}
	});
	
	return res;
}
/*

<label>宽：<input type="number" min="5" step="1" value="15" placeholder="棋盘宽度，例如 15" />
</label>
<label>高：<input type="number" min="5" step="1" value="15" placeholder="棋盘高度，例如 15" />
</label>
<label>胜利需要几子棋：<input type="number" min="5" step="1" value="5" placeholder="填 4 就是 四子棋" />
</label>
<br />
<label>胜利检查的方向：<input type="number" min="5" step="1" value="[[0,1],[1,1],[1,0],[1,-1]]" placeholder="以这个 [dx,dy] 列表检查" />
</label>
<br />
<button>初始化</button>
<p>操作返回值：null</p>
<p>胜利者：null</p>

*/
// (e=>(e))(document.createElement(""))
const handleClick = () => {
	const config = {
		w: +document.getElementById("inp-w").value,
		h: +document.getElementById("inp-h").value,
		wincnt: +document.getElementById("inp-wincnt").value,
		checker: JSON.parse(document.getElementById("inp-checker").value),
	};
	const p_status = (e=>(
		e.innerHTML = '操作返回值：null',
		e
	))(document.createElement("p"));
	const p_winner = (e=>(
		e.innerHTML = '获胜者：null',
		e
	))(document.createElement("p"));
	const p_next = (e=>(
		e.innerHTML = '下一步棋：黑',
		e
	))(document.createElement("p"));
	const inp_isup = (e=>(
		e.type = "checkbox",
		e.checked = false,
		e
	))(document.createElement("input"));
	
	const handlers = {
		isUp: () => {
			return inp_isup.checked;
		},
		init: (ret, v) => {
			const status = ret.status;
			p_status.innerText = `操作返回值：${JSON.stringify(ret)}`;
			if(status == "ok"){
				const transtab = {b:"黑", w:'白', [null]:"null"};
				const distab = {w:"黑", b:'白', [null]:"null"};
				p_winner.innerText = `获胜者：${transtab[ret.winner]}`;
				p_next.innerText = `下一步棋：${distab[v]}`;
			}
		},
		down: (ret, v) => {
			const status = ret.status;
			p_status.innerText = `操作返回值：${JSON.stringify(ret)}`;
			if(status == "ok"){
				const transtab = {b:"黑", w:'白', [null]:"null"};
				const distab = {w:"黑", b:'白', [null]:"null"};
				p_winner.innerText = `获胜者：${transtab[ret.winner]}`;
				p_next.innerText = `下一步棋：${distab[v]}`;
			}
		},
		up: ret => {
			const status = ret.status;
			p_status.innerText = `操作返回值：${JSON.stringify(ret)}`;
			if(status == "ok"){
				const transtab = {b:"黑", w:'白', [null]:"null"};
				p_winner.innerText = `获胜者：${transtab[ret.winner]}`;
			}
		},
	};
	const res = chessCreate(handlers, config.h, config.w, config.wincnt, config.checker);
	// const label_w = (e=>(
		// e.innerHTML = '宽：<input type="number" min="5" step="1" value="15" placeholder="棋盘宽度，例如 15" disabled />',
		// e
	// ))(document.createElement("label"));
	// const label_h = (e=>(
		// e.innerHTML = '高：<input type="number" min="5" step="1" value="15" placeholder="棋盘高度，例如 15" />',
		// e
	// ))(document.createElement("label"));
	// const label_wincnt = (e=>(
		// e.innerHTML = '胜利需要几子棋：<input type="number" min="5" step="1" value="5" placeholder="填 4 就是 四子棋" />',
		// e
	// ))(document.createElement("label"));
	// const label_checker = (e=>(
		// e.innerHTML = '胜利检查的方向：<input type="text" value="[[0,1],[1,1],[1,0],[1,-1]]" placeholder="以这个 [dx,dy] 列表检查" />',
		// e
	// ))(document.createElement("label"));
	const button_init = (e=>(
		e.innerHTML = '初始化',
		e.addEventListener("click", event => {
			res.chess.init(config.h, config.w, config.wincnt, config.checker);
			res.chess.domUpdateAll(res.dom);
		}),
		e
	))(document.createElement("button"));
	document.body.appendChild((e=>(
		e.style.border = "1px solid #888",
		// e.appendChild((e=>e)(document.createElement("br"))),
		e.appendChild((e=>(
			e.innerText = JSON.stringify(config),
			e
		))(document.createElement("p"))),
		e.appendChild(button_init),
		e.appendChild((e=>(
			e.innerText = "选择点击悔棋：",
			e.appendChild(inp_isup),
			e
		))(document.createElement("label"))),
		e.appendChild(p_status),
		e.appendChild(p_winner),
		e.appendChild(p_next),
		e.appendChild(res.dom),
		e
	))(document.createElement("div")));
}
document.getElementById("btn_create_instance").addEventListener("click", event => {
	try{
		handleClick();
	}catch(err){
		document.body.appendChild((e=>(e.innerText = err,e.style.color="#f00",e))(document.createElement('p')));
	}
});
