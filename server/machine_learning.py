
import tensorflow as tf


"""
=========================================================== AUTOENCODER
"""
class Autoencoder(tf.keras.Model):
	def __init__(self): 
		super().__init__()

		self.encoder = tf.keras.Sequential([
			tf.keras.layers.Normalization(),
			tf.keras.layers.Dense(128),
			tf.keras.layers.Dense(64),
			tf.keras.layers.Dense(32),
		])

		self.decoder = tf.keras.Sequential([
			tf.keras.layers.Dense(32),
			tf.keras.layers.Dense(64),
			tf.keras.layers.Dense(128),
			tf.keras.layers.Dense(200),
		])

	def call(self, x): 
		x = self.encoder(x)
		return self.decoder(x)



"""
=========================================================== TRANSFORMER
"""
class StepEncoder(tf.keras.layers.Layer):
	def __init__(
		self, num_patches, projection_dim, **kwargs
	):
		super().__init__(**kwargs)
		self.num_patches = num_patches
		self.position_embedding = tf.keras.layers.Embedding(
			input_dim=num_patches, output_dim=projection_dim
		)
		self.positions = tf.range(start=0, limit=self.num_patches, delta=1)

	def call(self, encoded_patches):
		encoded_positions = self.position_embedding(self.positions)
		encoded_patches = encoded_patches + encoded_positions
		return encoded_patches

class Encoder(tf.keras.layers.Layer):
	def __init__(
			self, input_shape, head_size, num_heads, ff_dim, dropout
		):
		super().__init__()

		self.mha = tf.keras.layers.MultiHeadAttention(
			key_dim=head_size, num_heads=num_heads, dropout=dropout
		)
		self.drop1 = tf.keras.layers.Dropout(dropout)
		self.norm1 = tf.keras.layers.LayerNormalization(epsilon=1e-6)
		self.add1 = tf.keras.layers.Add()

		self.conv1 = tf.keras.layers.Conv1D(
			filters=ff_dim, kernel_size=1, activation="relu"
		)
		self.drop2 = tf.keras.layers.Dropout(dropout)
		self.conv2 = tf.keras.layers.Conv1D(
			filters=input_shape[-1], kernel_size=1
		)
		self.norm2 = tf.keras.layers.LayerNormalization(epsilon=1e-6)
		self.add2 = tf.keras.layers.Add()

	def call(self, input):
		x = self.mha(input, input)
		x = self.drop1(x)
		x = self.norm1(x)
		res = self.add1([x, input])

		# FFN 
		x = self.conv1(res)
		x = self.drop2(x)
		x = self.conv2(x)
		x = self.norm2(x)
		return self.add2([x, res])

class TSP(tf.keras.Model):
	def __init__(self, 
		input_shape,
		head_size,
		num_heads,
		ff_dim,
		num_transformer_blocks,
		mlp_units,
		dropout=0,
		mlp_dropout=0):

		super().__init__()

		self.embedder = StepEncoder(200, 1)

		self.encoders = [
			Encoder(input_shape, head_size, num_heads, ff_dim, dropout) 
			for _ in range(num_transformer_blocks)
		]
		self.pool = tf.keras.layers.GlobalAveragePooling1D(
			data_format="channels_first"
		)

		self.mlp = []
		for dim in mlp_units:
			self.mlp.append(tf.keras.layers.Dense(dim, activation="relu"))
			self.mlp.append(tf.keras.layers.Dropout(mlp_dropout))
	

		self.model = tf.keras.Sequential([
			self.embedder,
			*self.encoders,
			self.pool,
			*self.mlp,
			tf.keras.layers.Dense(y_size, activation="linear")
		])

	def call(self, input):
		return self.model(input)



"""
=========================================================== MODEL _ LOADER
"""

class model_loader:

	model_cache = {}

	def load(self, filename: str):
		if filename in self.model_cache:
			return self.model_cache[filename]
		model = tf.keras.models.load_model(filename)
		model_cache[filename] = model
		return model




