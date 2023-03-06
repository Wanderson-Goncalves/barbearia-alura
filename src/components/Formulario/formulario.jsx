import React from 'react';
import styles from './Formulario.module.css'

export default function Formulario() {
    return (
        <form>
            <label for="nomesobrenome">Nome e sobrenome</label>
            <input type="text" id="nomesobrenome" className={styles.input__padrao} required />

            <label for="email">Email</label>
            <input type="email" id="email" className={styles.input__padrao} required placeholder="seuemail@dominio.com" />

            <label for="telefone">Telefone</label>
            <input type="tel" id="telefone" className={styles.input__padrao} required placeholder="(XX) XXXXX-XXXX" />

            <label for="mensagem">Mensagem</label>
            <textarea cols="70" rows="10" id="mensagem" className={styles.input__padrao} required></textarea>

            <fieldset>
                <legend>Como prefere o nosso contato?</legend>
                <label for="radio-email"><input type="radio" name="contato" value="email" id="radio-email" /> Email</label>

                <label for="radio-telefone"><input type="radio" name="contato" value="telefone" id="radio-telefone" /> Telefone</label>

                <label for="radio-whatsapp"><input type="radio" name="contato" value="whatsapp" id="radio-whatsapp" checked /> WhatsApp</label>
            </fieldset>

            <fieldset>
                <legend>Qual horário prefere ser atendido?</legend>
                <select>
                    <option>Manhã</option>
                    <option>Tarde</option>
                    <option>Noite</option>
                </select>
            </fieldset>

            <label class="checkbox"><input type="checkbox" checked />Gostaria de receber nossas novidades por email?</label>

            <input type="submit" value="Enviar formulário" className={styles.enviar} />
        </form>
    );
}
