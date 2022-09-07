class ItemDrawSample {
	Id;
	X;
	Y;
	ItemId;
	BasicItemId;
	FlagMode = false;
	Flag = false;
	Text = false;
	ModeExit = false;
	Seller = false;
	WeaponId=0;
	ColorText;
	constructor(id,X,Y,ItemId, FlagMode,Text,ModeExit,Seller,WeaponId,ColorText){
		this.Id = id;
		this.X = X;
		this.Y = Y;
		this.ItemId =this.BasicItemId = ItemId;
		this.FlagMode = FlagMode;
		this.Text  = Text;
		this.ModeExit = ModeExit;
		this.Seller = Seller;
		this.WeaponId = WeaponId;
		this.ColorText = ColorText;
		
	}
	GetIdimage = function(){
		if (this.FlagMode){
			if (this.Flag){
				// item flag.
				return 21;
			}
		}
		return this.ItemId;
	}
	Reset = function(){
		this.Flag = false;
	}
	SetFlag= function(){
		this.Flag = true;
	}
	IsText = function(){
		return this.Text.length>0;
	};
	SetText = function(Text){
		this.Text = Text;
	};
	GetText = function(){
		return this.Text;
	};
	GetModeExit(){
		return this.ModeExit;
	}
	GetSellerMode(){
		return this.Seller>0;
	}
	GetSellerCost(){
		return this.Seller;
	}
	GetId(){
		return this.Id;
	}
	GetWeaponId(){
		return this.WeaponId;
	}
}
export { ItemDrawSample }