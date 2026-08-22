const CHESS_DOMCREATE_DEFAULT_CONFIG = {
	w: e => {
		e.style.background = '#fff';
		e.style.borderRadius = '10px';
	},
	b: e => {
		e.style.background = '#000';
		e.style.borderRadius = '10px';
	},
	[null]: e => {
		e.style.background = '#888';
		e.style.borderRadius = '0';
	}
};
function createGrid(h, w, val){
	return new Array(h).fill(e => new Array(w).fill(val)).map(f => f());
}
class Chess{
	constructor(h = 0, w = 0, wincnt = 5, checker = [[0,1],[1,1],[1,0],[1,-1]]){
		this.win = null;
		this.table = createGrid(h, w, null);
		this.h = h, this.w = w, this.wincnt = wincnt, this.checker = checker;
	}
	toString(){
		return JSON.stringify({winner: this.win, table: this.table});
	}
	getWinner(){
		return this.win;
	}
	getGrid(){
		return this.table;
	}
	
	init(h = 0, w = 0, wincnt = 5, checker = [[0,1],[1,1],[1,0],[1,-1]]){
		this.win = null;
		this.table = createGrid(h, w, null);
		this.h = h, this.w = w, this.wincnt = wincnt, this.checker = checker;
	}
	isIn(y, x){
		return (y >= 0) && (y < this.h) && (x >= 0) && (x < this.w);
	}
	
	getc(y, x){
		return this.isIn(y, x)? this.table[y][x]: undefined;
	}
	check(y, x, ch, dy = 1, dx = 0, cnt = 5){
		var now = 0;
		for(let i = -cnt; i <= cnt; ++i){
			if(this.getc(y+dy*i, x+dx*i) === ch){
				++now;
			}else{
				now = 0;
			}
			if(now >= cnt){
				return true;
			}
		}
		return now >= cnt;
	}
	down(y, x, ch){
		if(this.win !== null){
			return {status: 'error', msg: "ENDV"};
		}
		if(!this.isIn(y, x)){
			return {status: 'error', msg: "OUTP"};
		}
		if(this.table[y][x] !== null){
			return {status: 'error', msg: "USED"};
		}
		this.table[y][x] = ch;
		
		for(const e of this.checker){
			if(this.check(y, x, ch, e[0], e[1], this.wincnt)){
				this.win = ch;
				return {status: 'ok', winner: ch};
			}
		}
		
		return {status: 'ok', winner: this.win};
	}
	up(y, x){
		if(!this.isIn(y, x)){
			return {status: 'error', msg: "OUTP"};
		}
		if(this.table[y][x] === null){
			return {status: 'error', msg: "EMTY"};
		}
		const v = this.table[y][x];
		var is_win = false;
		
		for(const e of this.checker){
			if(this.check(y, x, ch, e[0], e[1], this.wincnt)){
				is_win = true;
				break;
			}
		}
		this.table[y][x] = null;
		if(!is_win) return {status: 'ok', winner: this.win};
		
		for(const e of this.checker){
			if(this.check(y, x, ch, e[0], e[1], this.wincnt+1)){
				return {status: 'ok', winner: this.win};
			}
		}
		this.win = null;
		
		return {status: 'ok', winner: null};
	}
	
	domCreate(config = CHESS_DOMCREATE_DEFAULT_CONFIG){
		const elem_grid = document.createElement('div');
		elem_grid.style.height = "fit-content";
		elem_grid.style.maxWidth = "100%";
		elem_grid.style.overflow = "auto";
		elem_grid.style.borderCollapse = "collapse";
		elem_grid.style.border = "1px solid #000";
		elem_grid.style.display = "block";
		elem_grid.style.padding = "0";
		for(const row of this.table){
			const elem_row = document.createElement('div');
			elem_row.style.height = "fit-content";
			elem_row.style.width = "max-content";
			elem_row.style.borderCollapse = "collapse";
			elem_row.style.border = "1px solid #000";
			elem_row.style.display = "block";
			elem_row.style.margin = "0";
			elem_row.style.padding = "0";
			for(const block of row){
				const elem_block = document.createElement('div');
				elem_block.style.width = "20px";
				elem_block.style.height = "20px";
				elem_block.style.border = "1px solid #000";
				elem_block.style.display = "inline-block";
				elem_block.style.margin = "0";
				elem_block.style.textAlign = "center";
				elem_block.style.color = "#888";
				elem_block.style.background = "#fff";
				(f=>f||(e=>e.innerHTML=''))(config[block])(elem_block);
				elem_row.appendChild(elem_block);
			}
			elem_grid.appendChild(elem_row);
		}
		return elem_grid;
	}
	domGetP(elem_grid, y, x){
		return elem_grid.children[y].children[x];
	}
	domUpdateP(y, x, elem_block, config = CHESS_DOMCREATE_DEFAULT_CONFIG){
		(f=>f||(e=>e.innerHTML=''))(config[this.getc(y, x)])(elem_block);
		return;
	}
	domUpdateAll(elem_grid, config = CHESS_DOMCREATE_DEFAULT_CONFIG){
		Array.from(elem_grid.children).forEach(
			(r,y) => Array.from(r.children).forEach(
				(e,x) => this.domUpdateP(y, x, e, config)
			)
		);
	}
	domListen(elem_grid, type, listener){
		Array.from(elem_grid.children).forEach(
			(r,y) => Array.from(r.children).forEach(
				(e,x) => e.addEventListener(type, event => listener(event, e, y, x))
			)
		);
		return;
	}
}

